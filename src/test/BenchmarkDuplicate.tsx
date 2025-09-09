import React, {useRef, useState} from "react";
import "./BenchmarkDuplicate.scss";

const BenchmarkDuplicate: React.FC = () => {
    const [result, setResult] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Cache lưu kết quả { n: string }
    // Record là một utility type trong TypeScript để định nghĩa một object với key và value cụ thể
    // Ở đây, key là number (độ dài mảng) và value là string (kết quả benchmark)
    const cacheRef = useRef<Record<number, string>>({});

    // Thuật toán O(n^2)
    const hasDuplicateQuadratic = (arr: number[]) => {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (arr.slice(i + 1).indexOf(item) !== -1) {
                return true;
            }
        }
        return false;
    };

    // Thuật toán O(n) với Set
    const hasDuplicateLinear = (arr: number[]): boolean => {
        const seen = new Set<number>();
        for (const num of arr) {
            if (seen.has(num)) return true;
            seen.add(num);
        }
        return false;
    };

    const runBenchmark = (n: number) => {
        // Nếu đã có trong cache => lấy luôn
        if (cacheRef.current[n]) {
            setResult(cacheRef.current[n]);
            return;
        }

        setIsLoading(true);
        const arr = Array.from({length: n}, (_, i) => i);
        // Tạo mảng có độ dài n với các số từ 1 đến n (không có phần tử trùng lặp)
        // const arr1: number[] = Array.from({ length: n }, (_, i) => i + 1);

        // Benchmark O(n^2)
        const t1 = performance.now();
        hasDuplicateQuadratic(arr);
        const t2 = performance.now();

        // Benchmark O(n) sử dụng Set
        const t3 = performance.now();
        hasDuplicateLinear(arr);
        const t4 = performance.now();

        const resultText =
            `Array length = ${n}\n` +
            `O(n²) time: ${(t2 - t1).toFixed(2)} ms\n` +
            `O(n) time: ${(t4 - t3).toFixed(2)} ms`;

        // Lưu vào cache
        cacheRef.current[n] = resultText;

        setResult(resultText);
        setIsLoading(false);
    };

    return (
        <div style={{padding: 20, display: "flex", gap: 20, flexDirection: "row", alignItems: "flex-start"}}>
            <h2>Benchmark Duplicate Check</h2>
            <button className="btn" onClick={() => runBenchmark(1000)} disabled={isLoading}>Run Benchmark (n=1,000)
            </button>
            <button className="btn" onClick={() => runBenchmark(10000)} disabled={isLoading}>Run Benchmark (n=10,000)
            </button>
            <button className="btn" onClick={() => runBenchmark(50000)} disabled={isLoading}>Run Benchmark (n=50,000)
            </button>
            <pre style={{marginTop: 20, background: "#f4f4f4", padding: 10}}>
        {result}
      </pre>
        </div>
    );
};

export default BenchmarkDuplicate;
