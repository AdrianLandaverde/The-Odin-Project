function fibs(n, seq = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return seq;

    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

    if (seq.length < n) {
        return fibs(n, seq);
    } else {
        return seq;
    }
}

function generateFib() {
    const n = document.getElementById('fibInput').value;
    const fibSeq = fibs(n);
    document.getElementById('fibOutput').textContent = fibSeq.join(', ');
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function sortNumbers() {
    const input = document.getElementById('sortInput').value;
    const numbers = input.split(',').map(Number);
    const sortedNumbers = mergeSort(numbers);
    document.getElementById('sortOutput').textContent = sortedNumbers.join(', ');
}