from extensions import db


class Vehicle(db.Model):
    __tablename__ = 'vehicles'

    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String(64), nullable=False)
    model = db.Column(db.String(64), nullable=False)
    year = db.Column(db.Integer, nullable=True)
    vin = db.Column(db.String(64), unique=True, nullable=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)

    owner = db.relationship('Customer', back_populates='vehicles')
    repairs = db.relationship('Repair', back_populates='vehicle', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'make': self.make,
            'model': self.model,
            'year': self.year,
            'vin': self.vin,
            'customer_id': self.customer_id,
        }
