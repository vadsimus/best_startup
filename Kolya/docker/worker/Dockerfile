# docker/worker/Dockerfile

FROM python:stretch
COPY ../requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt
ADD . /docker
WORKDIR /docker
CMD python -m docker.worker