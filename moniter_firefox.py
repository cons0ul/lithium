import os
import time

cmd = 'cmd /c "c:\Program Files (x86)\Internet Explorer\iexplore.exe" http://localhost:2222/'


while True:
#	os.system('start test.bat')
#	os.system('start firefox.bat')
	dir=str(int(time.time()))
	
	time.sleep(1);
	
#	debug = 'cdb -g -G -pn iexplore.exe -c "r;uf @eip;kV;.lastevent;q" > out '
	debug='cdb -xd 80000004 -g -G -o "C:\Program Files (x86)\Mozilla Firefox\\firefox.exe" "http://localhost:3333/fuzz"  -c "r;uf @eip;kV;.lastevent;q" > out_ff'
	os.system(debug);
	
	cmd_log = 'mkdir .\\results\\firefox\\'+dir
	#print cmd_log
	search_av='grep "Last event.*Access" out_ff'
	search_av = 'ls'
	if os.system(search_av)==0:
		os.system(cmd_log)
		cmd_log_testcase = 'tail -n 1000 ff.log > ./results/firefox/'+dir+'/'+dir+'.log'
		#print cmd_log_testcase
		cmd_cp_out = 'cp out_ff ./results/firefox/'+dir+'/'+dir+'.debug'
		os.system(cmd_cp_out)
		os.system(cmd_log_testcase)

	time.sleep(1)


