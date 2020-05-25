## node-capture-request

### Capture HTTP requests
1.  Proxies like mitmproxy require configuration and tinkering. Spin this node webserver up to capture HTTP request details instead :)
2.  Run the web application. All requests to the port will be captured:
    ```
        Run the application using nodemon (if you want the application to restart on changes to app.js):
            cd /path/to/node-capture-request
            npm install -g nodemon
            nodemon app.js
        OR run with simple node:
            node app.js
        Browser should display:
            http://localhost:3000/
    ```
3.  The web client HTTP request (probably residing in another web application downstream) should be instructed to
    send its request to "http://localhost:3000".
4.  All requests sent to node-capture-request are visible in its terminal console.
    ```
    POST /shoppingcart/api/v2/carts/active/items/external?fields=** HTTP/1.1
    Accept: application/json
    X-User-ID: 7238daf7-bbf0-4eff-b9d6-8dd75bbdcc68
    X-Tenant-ID: 4b5a9334-23c0-447e-a67b-6756c5491840
    Content-Type: application/json
    Accept-Language: en-US
    User-Agent: Java-SDK
    X-Flow-ID: 797abdf1-fa14-4b5d-8d67-561f5164dafe
    Content-Length: 577
    Host: localhost:3001
    Connection: Keep-Alive
    Accept-Encoding: gzip,deflate
    
    {"batch_items":[{"batch_item_id":"87897bcd-b147-4c59-a9dc-d35ab9abe97c","item":{"accounting":[],"article_numbers":{"gtin":"gtinItm","supplier":"1111"},"attributes":[],"buying_channel":"REQUEST_EASYRFX","external_quote":{"date":"2020-05-25T16:17:07.358191Z","id":"easyrfx","item":"87897bcd-b147-4c59-a9dc-d35ab9abe97c"},"external_request":{"date":"2020-05-25T14:36:32.386432Z","id":"20000010"},"material_groups":{"buyer":"2705"},"name":"test test","pricing":{"currency":{"code":"USD"},"order_quantity":8.0,"price":8.0},"type":"quotation","unit_codes":{"order":{"code":"BX"}}}}]}

    ```
      