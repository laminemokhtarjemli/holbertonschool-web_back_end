#!/usr/bin/env python3
"""
Async basics in Python task 0
"""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures wait_n execution time"""

    start_time = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.perf_counter()
    total_time = end_time - start_time
    time_for_each_random_integer = total_time / n

    return time_for_each_random_integer
