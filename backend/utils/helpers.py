from flask import jsonify, request


def json_response(data=None, message='', status=200):
    payload = {'success': status < 400, 'message': message}
    if data is not None:
        payload['data'] = data
    return jsonify(payload), status


def parse_json():
    return request.get_json(silent=True) or {}


def handle_not_found(resource='Resource'):
    return json_response(message=f'{resource} not found.', status=404)
