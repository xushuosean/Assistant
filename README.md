# Assistant

before

安装meilisearch

使用docker安装

# Fetch the latest version of Meilisearch image from DockerHub
docker pull getmeili/meilisearch:v0.28

# Launch Meilisearch in development mode with a master key
docker run --rm \
    -p 7700:7700 \
    -e MEILI_MASTER_KEY='MASTER_KEY'\
    -v $(pwd)/meili_data:/meili_data \
    getmeili/meilisearch:v0.28 \
    meilisearch --env="development"
 

1. npm i
2. npm dev

