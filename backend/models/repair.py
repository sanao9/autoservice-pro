from datetime import datetime
from extensions import db


class Repair(db.Model):
    __tablename__ = 'repairs'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(256), nullable=False)
    status = db.Column(db.String(32), nullable=False, default='pending')
    estimated_cost = db.Column(db.Float, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicles.id'), nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)

    vehicle = db.relationship('Vehicle', back_populates='repairs')
    customer = db.relationship('Customer', back_populates='repairs')

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'status': self.status,
            'estimated_cost': self.estimated_cost,
            'created_at': self.created_at.isoformat(),
            'vehicle_id': self.vehicle_id,
            'customer_id': self.customer_id,
        }
