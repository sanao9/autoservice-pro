from extensions import db


class Customer(db.Model):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    phone = db.Column(db.String(32), nullable=True)

    vehicles = db.relationship('Vehicle', back_populates='owner', cascade='all, delete-orphan')
    repairs = db.relationship('Repair', back_populates='customer', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
        }
