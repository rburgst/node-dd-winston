sample project showing a bug in `dd-trace` which causes splat formatting on json to fail.

1. launch the server 

    ```bash
    npm start
   ```
   
2. request http://localhost:3000

    ```bash
   http :3000 
   ```
   
3. check server output

## Expected (without `dd-trace`): 

```json
{"level":"debug","message":"Listening on port 3000"}
{"level":"info","message":"new request with url /"}
```

## Actual (with dd-trace enabled)

```json
{"level":"debug","message":"Listening on port 3000"}
{"dd":{"trace_id":"4563346942945093045","span_id":"3676527141306563943"},"level":"info","message":"new request with url %s"}
```
