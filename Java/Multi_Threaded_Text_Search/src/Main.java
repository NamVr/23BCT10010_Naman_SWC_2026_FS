import java.io.*;
import java.nio.file.*;
import java.util.*;
class SearchTask implements Runnable {
    private List<String> lines;
    private int start;
    private int end;
    private String word;
    private String threadName;
    public SearchTask(List<String> lines, int start, int end,
                      String word, String threadName) {
        this.lines = lines;
        this.start = start;
        this.end = end;
        this.word = word;
        this.threadName = threadName;
    }
    @Override
    public void run() {
        boolean found = false;
        for (int i = start; i < end; i++) {
            if (lines.get(i).contains(word)) {
                System.out.println(threadName + " found \"" + word + "\" at line " + (i + 1)
                );
                found = true;
            }
        }
        if (!found) {
            System.out.println(threadName + " did not find the word.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            String wordToSearch = "Java";
            List<String> lines = Files.readAllLines(Paths.get("largerfile.txt"));
            int totalLines = lines.size();
            int partSize = totalLines / 3;
            Thread t1 = new Thread(new SearchTask(lines, 0, partSize, wordToSearch, "Thread-1"));
            Thread t2 = new Thread(new SearchTask(lines, partSize, 2 * partSize, wordToSearch, "Thread-2"));
            Thread t3 = new Thread(new SearchTask(lines, 2 * partSize, totalLines, wordToSearch, "Thread-3"));
            t1.start();
            t2.start();
            t3.start();
            t1.join();
            t2.join();
            t3.join();
            System.out.println("Search Completed.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}