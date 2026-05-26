from flask import Blueprint, request
from flask_jwt_extended import create_access_token
from extensions import db
from models.user import User
from utils.helpers import json_response, parse_json

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    data = parse_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return json_response(message='username, email, and password are required', status=400)

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return json_response(message='User already exists', status=400)

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return json_response(data=user.to_dict(), message='User created', status=201)


@auth_bp.route('/login', methods=['POST'])
def login():
    data = parse_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return json_response(message='username and password are required', status=400)

    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return json_response(message='Invalid credentials', status=401)

    access_token = create_access_token(identity=user.id)
    return json_response(data={'access_token': access_token}, message='Login successful')
