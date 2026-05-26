from services.repair_service import (
    create_repair as create_repair_service,
    delete_repair as delete_repair_service,
    get_repair as get_repair_service,
    get_repairs as get_repairs_service,
    update_repair as update_repair_service,
)


def get_repairs():
    return get_repairs_service()


def get_repair(repair_id):
    return get_repair_service(repair_id)


def create_repair(data):
    return create_repair_service(data)


def update_repair(repair_id, data):
    return update_repair_service(repair_id, data)


def delete_repair(repair_id):
    return delete_repair_service(repair_id)
