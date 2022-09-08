#!/usr/bin/env python3
"""Type-Annotated Function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
"""Type-Annotated Function"""
    return lambda x: multiplier * x