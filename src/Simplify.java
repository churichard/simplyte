import java.util.ArrayList;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

class Simplify{
    public static void main(String[] args){

        try {
            // Create a URL for the desired page
            URL url = new URL("//temp xxxxxxxxxx");

            // Read all the text returned by the server
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
            String str;
            while ((str = in.readLine()) != null) {
                str = in.readLine().toString();
                System.out.println(str);
                // str is one line of text; readLine() strips the newline character(s)
            }
            in.close();
        }catch(MalformedURLException e){
        }catch(IOException e){}

        // STEP 2
        // Search text for difficult long words and if there is one, replace it
    void searchDifficultWords(){
        String word = "";
        if(word.length() >= 6){

        }
    }

    // Replaces the given difficult word with an easy synonym
    // Returns an easier word
    String replace(String diffWord){
        ArrayList<String> synonyms = new ArrayList<String>();
        // search for synonyms of the given difficult word

        String easyWord = "";
        // search
        // synonyms:
        return easyWord;
    }

    ArrayList<String> findSynonyms(String word){
        //Somehow, search the internet for the synonyms
    }
}
}