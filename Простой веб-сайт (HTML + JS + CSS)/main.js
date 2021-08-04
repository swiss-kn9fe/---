function move(){
	store1=one.style.top.slice(0,-2);
	store2=two.style.left.slice(0,-2);
		 if (store1<510){
		 	store1=Number(store1)+1;
		 	one.style.top=store1.toString()+'px';
		 	setTimeout(move,100);
	}
		if(store1<510){
			store2=Number(store2)+1.9;
			two.style.left=store2.toString()+'px';
			setTimeout(move,100);
		}

}