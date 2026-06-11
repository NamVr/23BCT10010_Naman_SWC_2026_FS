//--------------------------------------Without Synchronization----------------------------------------
//class PiggyBank {
//    private int balance = 0;
//    public void addDollar() {
//        balance++;
//    }
//    public int getBalance() {
//        return balance;
//    }
//}
//class FamilyMember implements Runnable {
//    private PiggyBank bank;
//    public FamilyMember(PiggyBank bank) {
//        this.bank = bank;
//    }
//    @Override
//    public void run() {
//        for (int i = 0; i < 2000; i++) {
//            bank.addDollar();
//        }
//    }
//}
//--------------------------------------With Synchronization----------------------------------------
class PiggyBank {
    private int balance = 0;
    public synchronized void addDollar() {
        balance++;
    }
    public int getBalance() {
        return balance;
    }
}
class FamilyMember implements Runnable {
    private PiggyBank bank;
    public FamilyMember(PiggyBank bank) {
        this.bank = bank;
    }
    @Override
    public void run() {
        for (int i = 0; i < 2000; i++) {
            bank.addDollar();
        }
    }
}
public class Main {
    public static void main(String[] args) throws InterruptedException {
        PiggyBank bank = new PiggyBank();
        Thread t1 = new Thread(new FamilyMember(bank));
        Thread t2 = new Thread(new FamilyMember(bank));
        Thread t3 = new Thread(new FamilyMember(bank));
        Thread t4 = new Thread(new FamilyMember(bank));
        Thread t5 = new Thread(new FamilyMember(bank));
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
        t1.join();
        t2.join();
        t3.join();
        t4.join();
        t5.join();
        System.out.println("Final Balance = $" + bank.getBalance());
    }
}