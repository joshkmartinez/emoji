# Emoji

This is a microservice that gives you an emoji!
Check it out at [emoji.now.sh](https://emoji.now.sh)

---

## Usage

All endpoints are `GET` requests.

| URI       | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `/list`   | The key is the name of an emoji, with the value beeing the emoji itself |
| `/random` | Returns a random emoji                                                  |
| `/:emoji` | Returns the emoji for the given name                                    |
| `/rick`   | Try it out!                                                             |
