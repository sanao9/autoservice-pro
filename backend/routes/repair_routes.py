from flask import Blueprint, request
from controllers.repair_controller import (
    create_repair,
    delete_repair,
    get_repair,
    get_repairs,
    update_repair,
)

repair_bp = Blueprint('repairs', __name__)


@repair_bp.route('/', methods=['GET'])
def list_repairs():
    return get_repairs()


@repair_bp.route('/<int:repair_id>', methods=['GET'])
def repair_detail(repair_id):
    return get_repair(repair_id)


@repair_bp.route('/', methods=['POST'])
def add_repair():
    return create_repair(request.json)


@repair_bp.route('/<int:repair_id>', methods=['PUT'])
def edit_repair(repair_id):
    return update_repair(repair_id, request.json)


@repair_bp.route('/<int:repair_id>', methods=['DELETE'])
def remove_repair(repair_id):
    return delete_repair(repair_id)
