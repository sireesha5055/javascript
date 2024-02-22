import java.util.Arrays;
public class Main
{
    
    public static boolean containsDuplicate(int[] nums) {
        
          
         Set<Integer> numsSet = new HashSet<>(Arrays.asList(nums));
         
        if(numsSet.size() != nums.length){
            return true;
        }
        return false;
     
    }
     

   
	public static void main(String[] args) {
	    
	    int[] numbers = new int[1000000];

        for (int i = 0; i < 1000000; i++) {
            numbers[i] = i + 1;
        }
        System.out.println(containsDuplicate(int[] nums ));
    }

}


