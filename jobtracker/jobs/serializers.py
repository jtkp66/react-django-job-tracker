from rest_framework import serializers
from jobs.models import Job

# Job Serializer


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'
