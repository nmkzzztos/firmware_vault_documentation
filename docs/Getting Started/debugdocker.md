# Debugging Docker Problems

(Please note the Docker compose can take up to 20 minutes to build fresh)

While Docker has a bunch of advantages, it can be incredibly frustrating to debug. Here are some issues we encountered and how we fixed them.

## Volumes are unable to find their folders

After calling "docker compose up," you might get an error that looks like this:

Error response from daemon: error while mounting volume 'volume path in container/_data': failed to mount local volume: mount *path to the project*/docker_compose_dir/volumes/*one of the volumes*: volume path in container/_data, flags: 0x1000: no such file or directory

In my case, this happened because once the Docker compose was run once, the volumes are created, and Docker will remember them permanently. If the location of the project directory changes, and with that the absolute paths to the folders of the volumes, you will get this error. Docker apparently does not realize that it is called from a different location and still tries to open the old folder locations.

How to fix:

This command will delete all volumes from Docker so they can be rebuilt:
!! If you have volumes from other projects, they will also be deleted !!

```sh
docker volume rm $(docker volume ls -q)
```

## My SQL DB container is in a restarting loop

This is probably caused because the mysql_data volume is not empty (and the data in it conflicts with the init.sql).

How to fix:
Delete the contents of the /docker_compose_dir/volumes/mysql_data folder (hint: MySQL also creates hidden files).

If this does not work, also try to delete the volumes from Docker (so it can be rebuilt cleanly):

```sh
docker volume rm mysql_data
```

## Clear everything from Docker

### Stop all running containers
```sh
docker stop $(docker ps -aq)
```

### Remove all containers
```sh
docker rm $(docker ps -aq)
```

### Remove all images
```sh
docker rmi $(docker images -q)
```

### Remove all volumes
```sh
docker volume rm $(docker volume ls -q)
```

### Remove all networks (excluding the default ones)
```sh
docker network rm $(docker network ls | grep -v "bridge\|host\|none" | awk '/ / { print $1 }')
```

### Remove Docker build cache
```sh
docker builder prune -a
```
