from extensions import db
from models.vehicle import Vehicle
from models.customer import Customer
from utils.helpers import json_response, handle_not_found


def get_vehicles():
    vehicles = Vehicle.query.order_by(Vehicle.id.desc()).all()
    return json_response(data=[vehicle.to_dict() for vehicle in vehicles])


def get_vehicle(vehicle_id):
    vehicle = Vehicle.query.get(vehicle_id)
    if not vehicle:
        return handle_not_found('Vehicle')
    return json_response(data=vehicle.to_dict())


def create_vehicle(data):
    customer_id = data.get('customer_id')
    if not Customer.query.get(customer_id):
        return handle_not_found('Customer')

    vehicle = Vehicle(
        make=data.get('make'),
        model=data.get('model'),
        year=data.get('year'),
        vin=data.get('vin'),
        customer_id=customer_id,
    )
    db.session.add(vehicle)
    db.session.commit()
    return json_response(data=vehicle.to_dict(), message='Vehicle created', status=201)


def update_vehicle(vehicle_id, data):
    vehicle = Vehicle.query.get(vehicle_id)
    if not vehicle:
        return handle_not_found('Vehicle')

    vehicle.make = data.get('make', vehicle.make)
    vehicle.model = data.get('model', vehicle.model)
    vehicle.year = data.get('year', vehicle.year)
    vehicle.vin = data.get('vin', vehicle.vin)
    db.session.commit()
    return json_response(data=vehicle.to_dict(), message='Vehicle updated')


def delete_vehicle(vehicle_id):
    vehicle = Vehicle.query.get(vehicle_id)
    if not vehicle:
        return handle_not_found('Vehicle')
    db.session.delete(vehicle)
    db.session.commit()
    return json_response(message='Vehicle deleted')
