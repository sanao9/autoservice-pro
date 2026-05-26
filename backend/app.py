from flask import Flask
from config import Config
from extensions import db, jwt, cors
from routes.auth_routes import auth_bp
from routes.customer_routes import customer_bp
from routes.vehicle_routes import vehicle_bp
from routes.repair_routes import repair_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    cors.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(customer_bp, url_prefix='/api/customers')
    app.register_blueprint(vehicle_bp, url_prefix='/api/vehicles')
    app.register_blueprint(repair_bp, url_prefix='/api/repairs')

    with app.app_context():
        db.create_all()

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)
