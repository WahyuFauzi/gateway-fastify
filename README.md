# A gateway for bloxes app

note: Still in dev

## Requirement

please run user service and item service first

item service = `https://github.com/WahyuFauzi/bloxes-itemdb-spring`

user service = `https://github.com/WahyuFauzi/bloxes-userdb-spring`

## API Spec

### User Request

#### Create User (Register)

Request:

- Method: POST
- EndPoint: '/gw/user'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Body:

  ```json
  "email": "string",
  "password": "string",
  "user_name": "string"
  ```

- Response:

  ```json
  "code": "number",
  "status": "string",
  "data": "string"
  ```

#### Get User (Login)

Request:

- Method: GET
- EndPoint: '/gw/user/:userId'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": {
      "id": "string, UUID",
      "email": "string, email",
      "password": "string",
      "user_name": "string",
      "subscribed_space": "number, byte",
      "used_space": "number, byte",
      "subscribed_at": "date",
      "end_of_subscription": "date",
      "init_folder": "string, UUID",
      "recycle_bin": "array of string, UUID",
      "pinned": "array of string, UUID",
      "recent": "array of string, UUID",
      "created_at": "date",
      "updated_at": "date"
    }
  ```

#### Update User

Request:

- Method: PUT
- EndPoint: '/gw/user/:userId'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Body:

  ```json
  "email": "string",
  "password": "string",
  "user_name": "string",
  "subscribed_space": "number, byte",
  "used_space": "number, byte",
  "subscribed_at": "date",
  "end_of_subscription": "date",
  "init_folder": "string, UUID",
  "recycle_bin": "array of string, UUID",
  "pinned": "array of string, UUID",
  "recent": "array of string, UUID",
  ```

- Response:

  ```json
  "code": "number",
  "status": "string",
  "data": "string"
  ```

#### Delete User

Request:

- Method: DELETE
- EndPoint: '/gw/user/:userId'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Response:

  ```json
  "code": "number",
  "status": "string",
  "data": "string"
  ```

### Folder Request

#### Create Folder

Request:

- Method: POST
- EndPoint: '/gw/folder'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

  ```json
    "folder_name": "string"
  ```

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```

#### Get Folder

Request:

- Method: GET
- EndPoint: '/gw/folder/:folderId'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": {
      "id": "string, UUID",
      "folder_name": "string",
      "nested_foldes": "array of string",
      "items": "array of string, UUID",
      "created_at": "date",
      "updated_at": "date"
    }
  ```

#### Get List Nested Folders

Request:

- Method: GET
- EndPoint: '/gw/folder/nf/:folderId'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "array of string nested folders, UUID"
  ```

#### Get List Nested Items

Request:

- Method: GET
- EndPoint: '/gw/folder/ni/:folderId'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "array of string nested items, UUID"
  ```

#### Update Folder

Request:

- Method: PUT
- EndPoint: '/gw/user/:userId'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

  ```json
    "folder_name": "string",
    "nested_folders": "array of string, UUID",
    "items": "array of string, UUID"
  ```

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```

#### Delete Folder

this method will also delete the nested folders

- Method: DELETE
- EndPoint: '/gw/user/:userId'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```

### File Request

#### Create File

Request:

- Method: POST
- EndPoint: '/gw/item'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

  ```json
    "item_name": "string",
    "item_total_size": "number"
  ```

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```

#### Get File

Request:

- Method: GET
- EndPoint: '/gw/item/:itemId'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": {
      "id": "string, UUID",
      "item_name": "string",
      "item_total_size": "number",
      "created_at": "date",
      "updated_at": "date"
    }
  ```

#### Update File

Request:

- Method: PUT
- EndPoint: '/gw/item/:itemId'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body:

  ```json
    "item_name": "string"
  ```

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```

#### Delete File

Request:

- Method: DELETE
- EndPoint: '/gw/item/:itemId'
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```

### File Upload

Request:

- Method: POST
- EndPoint: '/gw/im'
- Header :

  - Content-Type: application/json
  - Accept: application/json

- form-data:

  ```formdata
    file: mime/type
  ```

- Response:

  ```json
    "code": "number",
    "status": "string",
    "data": "string"
  ```
