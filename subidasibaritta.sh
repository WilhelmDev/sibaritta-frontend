#!/bin/bash

# Definir variables
DOCKER_IMAGE_NAME="mensorestudio01/sibaritta-web"
DOCKER_IMAGE_TAG="latest"
CI_REGISTRY="registry.gitlab.com"
CI_REGISTRY_USER="mensorestudio01" # Usuario de gitlab
CI_REGISTRY_PASSWORD="@bn^v%VASCHm65Ka" #sontraseña de gitlab
ENV_FILE="contenido_del_env_file#FRONTEND
NEXT_PUBLIC_URL=https://api.qa.sibarita.mensorestudio.com/api/
NEXT_PUBLIC_URl_BASIC=https://web.qa.sibarita.mensorestudio.com/

DOMAIN=web.qa.sibarita.mensorestudio.com

NEXT_PUBLIC_RECAPTCHA=6Lcn2IApAAAAAHFaMVAxx1CVoXILQrGq2osvbUv9
NEXT_PUBLIC_WHATSAPP="+51 955478664"

KEY_STRIPE="pk_test_51OYeYoAxcKR0527klkQXwcOwBSHfy18vOYoMUgNRuA9HiONvIPU6VJUrmvwezAxlM4WiKVJJT8wC2zLn7DZwP0pp00h5WwfQKX"

NEXT_PUBLIC_APP_ID_GOOGLE=6Lc2H3spAAAAALV_7zq7K7LVMq34KOapdwHyJJL0
NEXT_PUBLIC_KEY_GOOGLE=6Lc2H3spAAAA
NEXT_PUBLIC_APP_ID_FACEBOOK=2401523760055383
NEXT_PUBLIC_KEY_FACEBOOK=ed4b364af47713f33e570f853c7b0c38
NEXT_PUBLIC_TIME=10"
SSH_USER="root"
SSH_PASSWORD="33klwZ_76mensore"
SSH_SERVER="64.23.149.235"

# Etapa: build_image
echo "Iniciando etapa build_image..."
docker --version
echo $CI_REGISTRY_USER
docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY
echo -n "$ENV_FILE" > .env
docker build --build-arg WWWGROUP='1000' -t $CI_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG  .
docker push $CI_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG

# Etapa: deploy
echo "Iniciando etapa deploy..."
echo -n "$ENV_FILE" > .env
apt-get update -qy
apt-get install -y openssh-client sshpass
export SSHPASS=$SSH_PASSWORD
sshpass -e scp -o StrictHostKeyChecking=no ./docker-compose-production.yml $SSH_USER@$SSH_SERVER:/home/sibaritas-docker-web/
sshpass -e scp -o StrictHostKeyChecking=no ./.env $SSH_USER@$SSH_SERVER:/home/sibaritas-docker-web/
sshpass -e ssh -o StrictHostKeyChecking=no -o PreferredAuthentications=password -T $SSH_USER@$SSH_SERVER 'cd /home/sibaritas-docker-web/ && docker compose -f docker-compose-production.yml pull && docker compose -f docker-compose-production.yml up -d --remove-orphans --force-recreate'

echo "Ejecución completada."
