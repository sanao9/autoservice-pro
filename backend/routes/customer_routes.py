from flask import Blueprint, request
from controllers.customer_controller import (
    create_customer,
    delete_customer,
    get_customer,
    get_customers,
    update_customer,
)

customer_bp = Blueprint('customers', __name__)


@customer_bp.route('/', methods=['GET'])
def list_customers():
    return get_customers()


@customer_bp.route('/<int:customer_id>', methods=['GET'])
def customer_detail(customer_id):
    return get_customer(customer_id)


@customer_bp.route('/', methods=['POST'])
def add_customer():
    return create_customer(request.json)


@customer_bp.route('/<int:customer_id>', methods=['PUT'])
def edit_customer(customer_id):
    return update_customer(customer_id, request.json)


@customer_bp.route('/<int:customer_id>', methods=['DELETE'])
def remove_customer(customer_id):
    return delete_customer(customer_id)
