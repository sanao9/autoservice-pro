from extensions import db
from models.customer import Customer
from utils.helpers import json_response, handle_not_found


def get_customers():
    customers = Customer.query.order_by(Customer.id.desc()).all()
    return json_response(data=[customer.to_dict() for customer in customers])


def get_customer(customer_id):
    customer = Customer.query.get(customer_id)
    if not customer:
        return handle_not_found('Customer')
    return json_response(data=customer.to_dict())


def create_customer(data):
    customer = Customer(
        name=data.get('name'),
        email=data.get('email'),
        phone=data.get('phone'),
    )
    db.session.add(customer)
    db.session.commit()
    return json_response(data=customer.to_dict(), message='Customer created', status=201)


def update_customer(customer_id, data):
    customer = Customer.query.get(customer_id)
    if not customer:
        return handle_not_found('Customer')

    customer.name = data.get('name', customer.name)
    customer.email = data.get('email', customer.email)
    customer.phone = data.get('phone', customer.phone)
    db.session.commit()
    return json_response(data=customer.to_dict(), message='Customer updated')


def delete_customer(customer_id):
    customer = Customer.query.get(customer_id)
    if not customer:
        return handle_not_found('Customer')
    db.session.delete(customer)
    db.session.commit()
    return json_response(message='Customer deleted')
