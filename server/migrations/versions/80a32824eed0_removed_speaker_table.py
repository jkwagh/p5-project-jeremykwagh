"""Removed Speaker Table

Revision ID: 80a32824eed0
Revises: be9c651ad094
Create Date: 2024-01-17 17:58:49.595641

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '80a32824eed0'
down_revision = 'be9c651ad094'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('speakers')
    with op.batch_alter_table('activities', schema=None) as batch_op:
        batch_op.add_column(sa.Column('speaker', sa.String(length=80), nullable=True))

    with op.batch_alter_table('activityattendee', schema=None) as batch_op:
        batch_op.drop_constraint('fk_activityattendee_speaker_id_speakers', type_='foreignkey')
        batch_op.drop_column('speaker_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('activityattendee', schema=None) as batch_op:
        batch_op.add_column(sa.Column('speaker_id', sa.INTEGER(), nullable=True))
        batch_op.create_foreign_key('fk_activityattendee_speaker_id_speakers', 'speakers', ['speaker_id'], ['id'])

    with op.batch_alter_table('activities', schema=None) as batch_op:
        batch_op.drop_column('speaker')

    op.create_table('speakers',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('first_name', sa.VARCHAR(length=80), nullable=False),
    sa.Column('last_name', sa.VARCHAR(length=80), nullable=False),
    sa.Column('organization', sa.VARCHAR(length=80), nullable=True),
    sa.Column('phone', sa.VARCHAR(length=80), nullable=False),
    sa.Column('email', sa.VARCHAR(length=80), nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), nullable=False),
    sa.Column('address', sa.VARCHAR(length=80), nullable=False),
    sa.Column('subject', sa.VARCHAR(length=80), nullable=False),
    sa.Column('activity_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['activity_id'], ['activities.id'], name='fk_speakers_activity_id_activities'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###
