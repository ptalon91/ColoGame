Template.taskItem.events({
	'click .ckeck': function(){
		Tasks.update(this._id, {$set:{checked: !this.checked}});
		// document.getElementById(task_content).style.visibility = 'hidden';
	},

	'click .delete': function(){
		Tasks.remove(this._id);
	},

	//compte a rebours
	'click #compteur':function(){
  		let duree = Number(prompt('Entrez le nombre de jour avant de la refaire:')*3600*24);
      function t(){
          let compteur=document.getElementById('compteur');
          s=duree;
          m=0;h=0;j=0;
          if(s<0){
              compteur.innerHTML="terminé<br/>"+"<a href=tasks_list.js>continuer</a>"
          }
          else{
            if(s>59){
                m=Math.floor(s/60);
                s=s-m*60;
            }
            if(m>59){
                h=Math.floor(m/60);
                m=m-h*60;
            }
            if(s<10){
                s="0"+s;
            }
            if(m<10){
                m="0"+m;
            }
            if(h>23){
                j=Math.floor(h/24);
                h=h-j*24;
            }
            if(h<10){
                h="0"+h;
            }
            compteur.innerHTML= j + ":" + h + ":" + m + ":" + s;
          }
          duree=duree-1;
          window.setTimeout("t();",999);
      }
      t();
	}
});


let countdown = new ReactiveCountdown(5);
countdown.start(function() {
   alert('c est fini');
});

Template.car.helpers({
    getCountdown: function() {
        return countdown.get();
    }
});