### Installation

MaterialDashBoard requires [Node.js](https://nodejs.org/en/download/) v4+ to run & [@angular/cli](https://angular.io/cli).

clone the repo using [GirishKumar-Muniraju/CovidTheatreSeatingArrangement](https://github.com/GirishKumar-Muniraju/CovidTheatreSeatingArrangement.git).

Install the dependencies and devDependencies for angular application by

```sh
$ git clone https://github.com/GirishKumar-Muniraju/CovidTheatreSeatingArrangement.git
$ cd theatre-seating
$ npm install
$ npm build --prod
$ npm run start --> (start the client application)
```

### Rest Ends

| API        | README                                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Client App | [Launch Theatre Seating - Dash board] [http://localhost:4200/](http://localhost:4200/)                         |
| Client App | [Launch Theatre Seating - Engine] [http://localhost:4200/seatmanagement](http://localhost:4200/seatmanagement) |

### Key Feature

`Dash Board`:

```sh
- Shows Problem statement.
- Show Option for app installation and Guide.
- Navigate to ✨ Seat Allocation Engine✨
- Navigate to ✨ Booking Ticket ✨(Coming Soon !!!)
```

`Seat Management`:

```sh
- Check How you use Seat Allocation Engine using Info Icon (ℹ).
- By Default, engine is initialized with 2x2 block with 50% allocation.
- User has ability to change the theatre seating number and govt occupancy percentage (%)
```

Click on `Show - Seating Arrangement` button to see engine computations.

### ScreenShots

![Dash Board](/screenShots/DashBoard.PNG?raw=true "Dash Board")
![Seat Allocation Engine - How to use](/screenShots/SeatAllocationEngine-How2Use.png?raw=true "Seat Allocation Engine - How to use")
![Seat Allocation Engine - Features](/screenShots/SeatAllocationEngine.png?raw=true "Seat Allocation Engine - Features")
![Ticket Booking](/screenShots/Ticketbooking.png?raw=true "Ticket Booking")

### Enhancement Features - On Next Iteration

```sh
- Once Seating allocation is done. Enable 'Book Tickets' screen for customers.
- UI/UX redesign for avaible seats.
- Select/De-Select avaible seats by customer.
- Use form validation.
- Work on Top margin.
```
