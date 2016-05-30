# GDG PORTO 16
This repo was used in a live-coding session to demonstrate the potential of service workers. It's based on Jake Archibald work which is also the main material of this online course https://www.udacity.com/course/offline-web-applications--ud899

# Wittr

This is a silly little demo app for an offline-first course.

# Installing

Dependencies:

* [Node.js](https://nodejs.org/en/) v0.21.7 or above

Then check out the project and run:

```sh
npm install
```

# Running

```sh
npm run serve
```

You should now have the app server at [localhost:8888](http://localhost:8888) and the config server at [localhost:8889](http://localhost:8889).

You can also configure the ports:

```sh
npm run serve -- --server-port=8000 --config-server-port=8001
```
