class Countdown implements Runnable {
    public void run() {
        try {
            for (int i = 10; i >= 1; i--) {
                System.out.println(i);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println("Interrupted");
        }
    }
}
class BlastOff implements Runnable {
    private Thread countdownThread;
    BlastOff(Thread countdownThread) {
        this.countdownThread = countdownThread;
    }
    public void run() {
        try {
            countdownThread.join();
            System.out.println("Blast Off");
        } catch (InterruptedException e) {
            System.out.println("Interrupted");
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Thread threadA = new Thread(new Countdown());
        Thread threadB = new Thread(new BlastOff(threadA));

        threadA.start();
        threadB.start();
    }
}