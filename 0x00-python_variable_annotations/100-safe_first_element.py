#!/usr/bin/env python3
"""Type-Annotated Function"""
from typing import Any, Union, Sequence


# The types of the elements of the input are not know
def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
"""Type-Annotated Function"""
    if lst:
        return lst[0]
    else:
        return None