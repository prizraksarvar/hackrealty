import bcrypt from 'bcryptjs';

export const cryptPassword = (password: string) => {
    return (new Promise<string>((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return reject(err);
            }

            bcrypt.hash(password, salt, (err2, hash) => {
                if (err2) {
                    reject(err2);
                }
                return resolve(hash);
            });
        });
    }));
};

export const comparePassword = (plainPass: string, hashword: string) => {
    return (new Promise<boolean>((resolve, reject) => {
        bcrypt.compare(plainPass, hashword, (err, isPasswordMatch) => {
            return err == null ?
                resolve(isPasswordMatch) :
                reject(err);
        });
    }));
};
