# PeakU Bootcamp - Workshop 02 - Trabook

## Initialize project

In the project directory, you can run:

```
source env/bin/activate
```

to activate Python 3 virtual environment.

Then:

```
cd trabook-backend
```

and:

```
python3 manage.py runserver
```

to run the server.

For the frontend, go to the folder first:

```
cd trabook-frontend
```

then install dependencies:

```
npm install
```

and finally:

```
npm run start
```

to run the client.

Note: Server is configured to run at port 8000 and client to run at port 3000. If you change this configuration, you might alter the functioning of the application. This would require you to configure the cors in the backend and the proxy in the frontend.
