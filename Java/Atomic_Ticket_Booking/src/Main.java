import java.util.concurrent.atomic.AtomicInteger;
class Flight {
    private AtomicInteger seats = new AtomicInteger(10);
    public void bookSeat(String user) {
        while (true) {
            int available = seats.get();
            if (available <= 0) {
                System.out.println(user + " could not book a seat.");
                return;
            }
            if (seats.compareAndSet(available, available - 1)) {
                int seatNumber = available;
                System.out.println(user + " successfully booked Seat " + seatNumber);
                return;
            }
        }
    }
    public int getRemainingSeats() {
        return seats.get();
    }
}
class User implements Runnable {
    private Flight flight;
    private String name;
    public User(Flight flight, String name) {
        this.flight = flight;
        this.name = name;
    }
    @Override
    public void run() {
        flight.bookSeat(name);
    }
}
public class Main {
    public static void main(String[] args) throws InterruptedException {
        Flight flight = new Flight();
        Thread[] users = new Thread[100];
        for (int i = 0; i < 100; i++) {
            users[i] = new Thread(
                    new User(flight, "User-" + (i + 1))
            );
            users[i].start();
        }
        for (int i = 0; i < 100; i++) {
            users[i].join();
        }
        System.out.println("\nRemaining Seats = " + flight.getRemainingSeats()
        );
    }
}