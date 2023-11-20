import os

# Database initialization
basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(basedir, "sites.db")
SQLALCHEMY_TRACK_MODIFICATIONS = False
