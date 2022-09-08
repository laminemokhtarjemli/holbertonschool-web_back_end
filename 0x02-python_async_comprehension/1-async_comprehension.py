#!/usr/bin/env python3
"""Async Comprehension task 1"""
import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random numbers and returns them"""
      list_nums = [gen async for gen in async_generator()]
    return randomNums
