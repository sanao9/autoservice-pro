from services.customer_service import (
    create_customer as create_customer_service,
    delete_customer as delete_customer_service,
    get_customer as get_customer_service,
    get_customers as get_customers_service,
    update_customer as update_customer_service,
)


def get_customers():
    return get_customers_service()


def get_customer(customer_id):
    return get_customer_service(customer_id)


def create_customer(data):
    return create_customer_service(data)


def update_customer(customer_id, data):
    return update_customer_service(customer_id, data)


def delete_customer(customer_id):
    return delete_customer_service(customer_id)
