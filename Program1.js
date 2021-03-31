var nums = [8,1,1,13];
var target = 9;
var j,i;
var output, ctr;
for(i=0;i<=nums.length-1;i++){
	output=0;
	for(j=i;j<=nums.length-i;j++ ){
		output+=nums[j];
		if(output==target){
			for(ctr=j;j>=0;j--){
				console.log(j);
			}

		}
	}	
}
	

