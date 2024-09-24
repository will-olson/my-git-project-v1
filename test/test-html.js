const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { JSDOM } = require('jsdom');

const htmlFiles = [
    'index.html',
    'nft-originals-final.html',
    'bad-bunny.html',
    'original-snuff-shop.html',
    'space-punk.html',
    'alpha-girl.html',
    'fine-line-drawings.html',
    'sad-cat.html',
    'skeletongue.html',
    'weather-report.html',
    'doge-club.html'
];

describe('HTML Files', function() {
    htmlFiles.forEach(file => {
        it(`should have valid structure in ${file}`, function(done) {
            const filePath = path.join(__dirname, '..', file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return done(err);
                }

                const dom = new JSDOM(data);
                const document = dom.window.document;

                expect(document.querySelector('head')).to.not.be.null;
                expect(document.querySelector('title')).to.not.be.null;
                expect(document.querySelector('body')).to.not.be.null;
                expect(document.querySelector('nav')).to.not.be.null;

                done();
            });
        });
    });
});
