from services.vehicle_service import (
    create_vehicle as create_vehicle_service,
    delete_vehicle as delete_vehicle_service,
    get_vehicle as get_vehicle_service,
    get_vehicles as get_vehicles_service,
    update_vehicle as update_vehicle_service,
)


def get_vehicles():
    return get_vehicles_service()


def get_vehicle(vehicle_id):
    return get_vehicle_service(vehicle_id)


def create_vehicle(data):
    return create_vehicle_service(data)


def update_vehicle(vehicle_id, data):
    return update_vehicle_service(vehicle_id, data)


def delete_vehicle(vehicle_id):
    return delete_vehicle_service(vehicle_id)
