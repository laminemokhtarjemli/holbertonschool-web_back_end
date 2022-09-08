#!/usr/bin/env python3
"""Type-Annotated Function"""
from typing import Union, List


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
"""Type-Annotated Function"""
    return float(sum(mxd_list))

