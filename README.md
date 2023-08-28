# PeakU Bootcamp - Workshop 02 - Trabook

## Initialize project

Create a virtual environment for the backend:

```
python3 -m venv venv
```

Activate it, by running:

```
source venv/bin/activate
```

Install dependencies:

```
pip install -r reqs.txt
```

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

