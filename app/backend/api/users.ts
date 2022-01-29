import * as cors from "cors";

//initial server code
app.get(
    '/users',
    cors(),
    function (
      req: any,
      res: {
        status: (arg0: number) => {
          (): any;
          new (): any;
          json: {
            (arg0: { id: string; name: string; email: string }[]): void;
            new (): any;
          };
        };
      }
    ) {
      const Users = [
        { id: '1', name: 'kaleb', email: 'kalebpierce@gmail.com' },
        { id: '2', name: 'bob', email: 'fakegmail@gmail.com' },
      ];
      res.status(200).json(Users);
      console.log('You made a get request');
    }
  );