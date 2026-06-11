//--------------------------------------With Deadlock----------------------------------------
//class Kitchen {
//    static final Object knife = new Object();
//    static final Object cuttingBoard = new Object();
//}
//class Chef1 extends Thread {
//    @Override
//    public void run() {
//        synchronized (Kitchen.knife) {
//            System.out.println("Chef 1 picked up Knife");
//            try {
//                Thread.sleep(100);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
//            System.out.println("Chef 1 waiting for Cutting Board");
//            synchronized (Kitchen.cuttingBoard) {
//                System.out.println("Chef 1 starts cooking");
//            }
//        }
//    }
//}
//class Chef2 extends Thread {
//    @Override
//    public void run() {
//        synchronized (Kitchen.cuttingBoard) {
//            System.out.println("Chef 2 picked up Cutting Board");
//            try {
//                Thread.sleep(100);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
//            System.out.println("Chef 2 waiting for Knife");
//            synchronized (Kitchen.knife) {
//                System.out.println("Chef 2 starts cooking");
//            }
//        }
//    }
//}
//--------------------------------------Without Deadlock----------------------------------------
class Kitchen {
    static final Object knife = new Object();
    static final Object cuttingBoard = new Object();
}
class Chef1 extends Thread {
    @Override
    public void run() {
        synchronized (Kitchen.knife) {
            System.out.println("Chef 1 picked up Knife");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            synchronized (Kitchen.cuttingBoard) {
                System.out.println("Chef 1 picked up Cutting Board");
                System.out.println("Chef 1 starts cooking");
            }
        }
    }
}
class Chef2 extends Thread {
    @Override
    public void run() {
        synchronized (Kitchen.knife) {
            System.out.println("Chef 2 picked up Knife");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            synchronized (Kitchen.cuttingBoard) {
                System.out.println("Chef 2 picked up Cutting Board");
                System.out.println("Chef 2 starts cooking");
            }
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Chef1 chef1 = new Chef1();
        Chef2 chef2 = new Chef2();
        chef1.start();
        chef2.start();
    }
}