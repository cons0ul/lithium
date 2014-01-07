import os
import time

cmd = 'cmd /c "c:\Program Files (x86)\Internet Explorer\iexplore.exe" http://localhost:2222/'


while True:
	os.system('start test.bat')
#	os.system('start firefox.bat')
	dir=str(int(time.time()))
	
	time.sleep(1);
	
	debug = 'cdb -xd 80000004 -g -G -pn iexplore.exe -c "r;uf @eip;kV;.lastevent;q" > out '
#	debug='cdb -g -G -pn firefox.exe -c "r;uf @eip;kV;.lastevent;q" > out'
	os.system(debug);
	
	cmd_log = 'mkdir .\\results\\ie\\'+dir
	#print cmd_log
#	search_av='grep "Last event.*Access" out'
	search_av='ls'
	if os.system(search_av)==0:
		os.system(cmd_log)
		cmd_log_testcase = 'tail -n 1000 ie.log > ./results/ie/'+dir+'/'+dir+'.log'
		#print cmd_log_testcase
		cmd_cp_out = 'cp out ./results/ie/'+dir+'/'+dir+'.debug'
		os.system(cmd_cp_out)
		os.system(cmd_log_testcase)

	time.sleep(1)


