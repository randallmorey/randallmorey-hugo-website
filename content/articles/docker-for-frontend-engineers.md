---
title: "Docker for Frontend Engineers"
date: 2018-03-18T20:00:00-05:00
cover_art: false
reverse_header: false
lead: >
  Docker has transformed the way we develop software, simplifying thorny
  environment setups with isolation, consistency, and reproducibility. There is
  still much room to modernize the frontend practice through containerization.
  This brief practical introduction covers the essentials of Docker Compose for
  casual users.
---

Containers are everywhere.  You've probably heard of [Docker][docker] and
[its benefits][docker-benefits].  Perhaps you've followed a tutorial outlining
the use of `Dockerfile` and the `docker` CLI.  But for many frontend use cases,
there's a easier way.  We'll dive in with simple, practical examples of
[Docker Compose][docker-compose], a declarative approach to Docker.
[Install Docker][install-docker] and follow along.

<!--more-->

## Static Local Server

A common frontend development scenario employs a static local server.
Say you have a static website to view and you want to pass
it through a server (keeping in mind that loading up files directly in a browser
won't do, since `file://` may be treated differently than `http://`).  A typical
solution is to install a heavy server app such as [MAMP][mamp], or to rely on an
OS-level local server.  Both are generally one-off solutions; switching among
multiple projects can be a pain.

[Docker Compose][docker-compose] provides a flexible, developer-friendly
solution that eliminates the need to install software directly on your host
machine. In the same directory as your static `index.html`, create a
`docker-compose.yml` file:

{{< highlight yml >}}
version: '3'
services:
  web:
    image: 'nginx:latest'
    volumes:
      - './:/usr/share/nginx/html'
    ports:
      - 8080:80
{{< /highlight >}}

From the command line, start up your static server:

{{< highlight bash >}}
docker-compose up
{{< /highlight >}}

Done!  You're now running an industrial-strength [nginx server][nginx-docker]
with a minimum of effort.  Visit
[`http://localhost:8080`](http://localhost:8080) in a browser.  You can even run
multiple servers simultaneously from different projects.  Just be sure to change
`8080` to a unique open port for each project.  If your project lives in git, go
ahead and commit the `docker-compose.yml` file, so that your local server is
always ready to go.


## Local MongoDB in Seconds

One of the more frustrating aspects of development without Docker is the
difficulty of installing, configuring, and managing _backing services_ such as
databases across multiple environments, identically.  With Docker Compose, your
database is up and running in seconds.  In a new project folder, create a
`docker-compose.yml` file:

{{< highlight yml >}}
version: '3'
services:
  mongo:
    image: 'mongo:3'
    command: 'mongod'
    ports:
      - 27017:27017
{{< /highlight >}}

From the command line, start up Mongo:

{{< highlight bash >}}
docker-compose up
{{< /highlight >}}

That's it.  [Mongo is now running in a container][mongodb-docker] and requires
no username/password (unless configured).  Other developers will get identical
results by running the same command.  If accessing mongo from the host computer
(i.e. not inside a Docker container) the instance URL is
`mongodb://localhost:27017`, and specific databases can be accessed at
`mongodb://localhost:27017/db-name`.


## Clean Up Running Containers

Some containers may continue running when you're done with them, even after
<kbd>CTRL+c</kbd>.  To stop all running containers, try this command:

{{< highlight bash >}}
docker stop $(docker ps -aq)
{{< /highlight >}}


## MongoDB Admin Interface

A database isn't very useful without an application to drive it.  Typically, you
might run a Node application against the database.  We'll do just that with an
off-the-shelf [frontend admin for Mongo][admin-mongo].  Some installation and
setup is required to start the app, but we can still avoid using a `Dockerfile`.
In the same project as your MongoDB `docker-compose.yml`, create a
`run.sh` file:

{{< highlight bash >}}
#!/bash

# clone the mongo admin project
git clone https://github.com/mrvautin/adminMongo.git admin-mongo;

# install dependencies
cd admin-mongo;
npm install;

# run
npm start;
{{< /highlight >}}

And make sure it has execution rights by running the command:

{{< highlight bash >}}
chmod +x run.sh
{{< /highlight >}}

Now declare the frontend service.  Your existing `docker-compose.yml` file
should look something like this:

{{< highlight yml >}}
version: '3'
services:
  mongo:
    image: 'mongo:3'
    command: 'mongod'
    ports:
      - 27017:27017
  admin:
    image: 'node:9'
    entrypoint: 'bash'
    command: './run.sh'
    working_dir: '/src'
    ports:
      - 1234:1234
    volumes:
      - './run.sh:/src/run.sh'
    depends_on:
      - 'mongo'
{{< /highlight >}}

Startup the services once more:

{{< highlight bash >}}
docker-compose up
{{< /highlight >}}

Load up `http://localhost:1234` in a browser.  Admin Mongo needs some
information about the Mongo instance.  Enter a connection name (anything
you want) with a connection string (MongoDB URL) of `mongodb://mongo`.  Note
that the host name of the database is `mongo` from _inside a container_ because
it is attached via the `depends_on` directive.  If we tried connecting to the
instance from a service running outside of Docker, the host would
be `localhost`.

That's all there is to it.  Once you've successfully created a connection, click
"connect", create a database, and start manipulating data via the UI.


## Conclusion

I prefer [off-the-shelf images][docker-hub] via `docker-compose` over
custom-built images with `docker`.  In development, custom images can be
inflexible, requiring frequent rebuilds if the project has dependencies
(most projects do).  It's also just simpler to rely on the declarative nature of
`docker-compose.yml` to wire up services, rather than remembering a number of
long `docker` commands.  For publishing and deployment though, I'd still
consider custom-built images.

The best way to learn more is to experiment and to view other frontend projects
that use Docker.  We've only scratched the surface of what's possible.


[docker]: https://www.docker.com
[docker-compose]: https://docs.docker.com/compose/
[docker-benefits]: https://www.bryanbraun.com/2014/07/15/the-frontend-developers-guide-to-docker/
[install-docker]: https://www.docker.com/community-edition
[docker-hub]: https://hub.docker.com/explore/
[mamp]: https://www.mamp.info
[nginx-docker]: https://hub.docker.com/_/nginx/
[mongodb-docker]: https://hub.docker.com/_/mongo/
[admin-mongo]: https://github.com/mrvautin/adminMongo
