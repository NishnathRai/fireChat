function usefindPasswordStrength(password){
        let ans = 0;
        if (/[a-z]/.test(password)) ans++;
        if (/(?=.*[A-Z])/.test(password)) ans++;
        if( /(?=.*\d)/.test(password)) ans++;
        if (/[\^$*.{}()\[\]?\"!@#%&/\\,><':;|_~]/.test(password)) ans++;
        return ans; 
}

export default usefindPasswordStrength;