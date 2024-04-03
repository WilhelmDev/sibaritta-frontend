#!/bin/bash

# Definir variables
DOCKER_IMAGE_NAME="mensorestudio01/sibaritta-web"
DOCKER_IMAGE_TAG="latest"
CI_REGISTRY="registry.gitlab.com"
CI_REGISTRY_USER="arianvaldivieso" # Usuario de gitlab
CI_REGISTRY_PASSWORD="glpat-6tb1R2kRCVsqBQn7nyJR" #sontraseña de gitlab

SSH_USER="root"
SSH_SERVER="64.23.193.181"

# Etapa: build_image
echo "Iniciando etapa build_image..."
docker --version
echo $CI_REGISTRY_USER
docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY

docker build --build-arg WWWGROUP='1000' -t $CI_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG  .
docker push $CI_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG

# Etapa: deploy
echo "Iniciando etapa deploy..."

scp -o StrictHostKeyChecking=no ./docker-compose-production.yml $SSH_USER@$SSH_SERVER:/home/sibaritas-docker-web/
scp -o StrictHostKeyChecking=no ./.env $SSH_USER@$SSH_SERVER:/home/sibaritas-docker-web/
ssh -o StrictHostKeyChecking=no -T $SSH_USER@$SSH_SERVER 'cd /home/sibaritas-docker-web/ && docker compose -f docker-compose-production.yml pull && docker compose -f docker-compose-production.yml up -d --remove-orphans --force-recreate'

echo "Ejecución completada."
