from flask import Blueprint, request
from controllers.vehicle_controller import (
    create_vehicle,
    delete_vehicle,
    get_vehicle,
    get_vehicles,
    update_vehicle,
)

vehicle_bp = Blueprint('vehicles', __name__)


@vehicle_bp.route('/', methods=['GET'])
def list_vehicles():
    return get_vehicles()


@vehicle_bp.route('/<int:vehicle_id>', methods=['GET'])
def vehicle_detail(vehicle_id):
    return get_vehicle(vehicle_id)


@vehicle_bp.route('/', methods=['POST'])
def add_vehicle():
    return create_vehicle(request.json)


@vehicle_bp.route('/<int:vehicle_id>', methods=['PUT'])
def edit_vehicle(vehicle_id):
    return update_vehicle(vehicle_id, request.json)


@vehicle_bp.route('/<int:vehicle_id>', methods=['DELETE'])
def remove_vehicle(vehicle_id):
    return delete_vehicle(vehicle_id)
