from extensions import db
from models.repair import Repair
from models.customer import Customer
from models.vehicle import Vehicle
from utils.helpers import json_response, handle_not_found


def get_repairs():
    repairs = Repair.query.order_by(Repair.id.desc()).all()
    return json_response(data=[repair.to_dict() for repair in repairs])


def get_repair(repair_id):
    repair = Repair.query.get(repair_id)
    if not repair:
        return handle_not_found('Repair')
    return json_response(data=repair.to_dict())


def create_repair(data):
    customer_id = data.get('customer_id')
    vehicle_id = data.get('vehicle_id')
    if not Customer.query.get(customer_id):
        return handle_not_found('Customer')
    if not Vehicle.query.get(vehicle_id):
        return handle_not_found('Vehicle')

    repair = Repair(
        description=data.get('description'),
        status=data.get('status', 'pending'),
        estimated_cost=data.get('estimated_cost'),
        customer_id=customer_id,
        vehicle_id=vehicle_id,
    )
    db.session.add(repair)
    db.session.commit()
    return json_response(data=repair.to_dict(), message='Repair created', status=201)


def update_repair(repair_id, data):
    repair = Repair.query.get(repair_id)
    if not repair:
        return handle_not_found('Repair')

    repair.description = data.get('description', repair.description)
    repair.status = data.get('status', repair.status)
    repair.estimated_cost = data.get('estimated_cost', repair.estimated_cost)
    db.session.commit()
    return json_response(data=repair.to_dict(), message='Repair updated')


def delete_repair(repair_id):
    repair = Repair.query.get(repair_id)
    if not repair:
        return handle_not_found('Repair')
    db.session.delete(repair)
    db.session.commit()
    return json_response(message='Repair deleted')
